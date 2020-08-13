<?php

namespace App\Http\Controllers;

use App\ApiChannel;
use App\Bitrate;
use App\Calendar;
use App\Channel;
use App\CrashedChannel;
use App\Volume;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class ChannelController extends Controller
{

    /**
     * fn pro ulozenno noveho kanalu
     *  url: this.channelInput,
        channelName: this.ffprobeOutput.nazev,
        workerId: this.worker
        dohledovat: this.dohledovat
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {

        if ($request->dohledovat == true) {
            $noMonitor = "mdi-check";
        } else {
            $noMonitor = "mdi-close";
        }

        if ($request->dohledVolume == true) {
            $dohledVolume = "1";
        } else {
            $dohledVolume = "0";
        }

        if ($request->dohledBitrate == true) {
            $dohledBitrate = "1";
        } else {
            $dohledBitrate = "0";
        }

        if ($request->sendAlert == true) {
            $sendAlert = "1";
        } else {
            $sendAlert = "0";
        }

        if ($request->createImg == true) {
            $vytvoritNahled = "1";
        } else {
            $vytvoritNahled = "0";
        }

        $data = "url => " . $request->url . " , nazev => " . $request->channelName . " , dohledovat => " . $request->dohledovat;
        $user = Auth::user();
        UserHistoryController::store($user->email, "create_stream", $data);

        if ($request->radio == true) {
            $radio = "true";
            $img = "/storage/radioImage.png";
        } else {
            $radio = "false";
            $img = "false";
        }

        if ($request->api == true) {
            $api = "1";
        } else {
            $api = null;
        }

        Channel::create([
            'url' => $request->url,
            'nazev' => $request->channelName,
            'noMonitor' => $noMonitor,
            'radio' => $radio,
            'dokumentaceUrl' => $request->apiUrl,
            'img' => $img,
            'api' => $api,
            'dohledVolume' => $dohledVolume,
            'dohledBitrate' => $dohledBitrate,
            'sendAlert' => $sendAlert,
            'vytvoritNahled' => $vytvoritNahled
        ]);

        return [
            'isAlert' => "isAlert",
            'stat' => "success",
            'msg' => "Stream byl úspěšně uložen!",
        ];
    }


    /**
     *
     * channelId
     *
     * @param Request $request
     * @return void
     */
    public function delete(Request $request)
    {
        $channelData = Channel::where('id', $request->channelId)->first();
        $user = Auth::user();
        UserHistoryController::store($user->email, "delete_stream", $channelData->nazev);

        Channel::where('id', $request->channelId)->delete();
        Volume::where('channelId', $request->channelId)->delete();
        Bitrate::where('channelId', $request->channelId)->delete();
        CrashedChannel::where('channelId', $request->channelId)->delete();
        return [
            'isAlert' => "isAlert",
            'stat' => "success",
            'msg' => "Stream byl úspěšně smazán!",
        ];
    }

    /**
     * fn pro získání dat pro editaci kanalu
     *
     * channelId
     * @param Request $request
     * @return void
     */
    public function getChannelData(Request $request)
    {
        $channel = Channel::where('id', $request->channelId)->first();
        if ($channel->noMonitor == 'mdi-check') {
            $dohled = true;
        } else {
            $dohled = false;
        }

        $api = HelperController::checkIfIsValueZeroOrOneAndReturnTrueOrFalse($channel->api);
        $dohledVolume = HelperController::checkIfIsValueZeroOrOneAndReturnTrueOrFalse($channel->dohledVolume);
        $dohledBitrate = HelperController::checkIfIsValueZeroOrOneAndReturnTrueOrFalse($channel->dohledBitrate);
        $sendAlert = HelperController::checkIfIsValueZeroOrOneAndReturnTrueOrFalse($channel->sendAlert);
        $sendSMS = HelperController::checkIfIsValueZeroOrOneAndReturnTrueOrFalse($channel->sendSMS);
        $vytvoritNahled = HelperController::checkIfIsValueZeroOrOneAndReturnTrueOrFalse($channel->vytvoritNahled);

        return [
            'nazev' => $channel->nazev,
            'url' => $channel->url,
            'dohled' => $dohled,
            'dokumentaceUrl' => $channel->dokumentaceUrl,
            'api' => $api,
            'dohledVolume' => $dohledVolume,
            'dohledBitrate' => $dohledBitrate,
            'sendAlert' => $sendAlert,
            'sendSMS' => $sendSMS,
            'vytvoritNahled' => $vytvoritNahled
        ];
    }


    /**
     * fn pro editaci kanalu
     *
     *
     * channelId: this.channelId,
          url: this.editdat.url,
          nazev: this.editdat.nazev,
          dohled: this.editdat.dohled,
          workerId: this.worker
     * @param Request $request
     * @return void
     */
    public function edit(Request $request)
    {

        if ($request->api == true) {
            $api = "1";
        } else {
            $api = null;
        }

        $dohledVolume = HelperController::checkIfIsValueIsTrueOrFalseAndReturnZeroOrOne($request->dohledVolume);
        $dohledBitrate = HelperController::checkIfIsValueIsTrueOrFalseAndReturnZeroOrOne($request->dohledBitrate);
        $sendAlert = HelperController::checkIfIsValueIsTrueOrFalseAndReturnZeroOrOne($request->sendAlert);
        $vytvoritNahled = HelperController::checkIfIsValueIsTrueOrFalseAndReturnZeroOrOne($request->createImg);
        $sendSMS = HelperController::checkIfIsValueIsTrueOrFalseAndReturnZeroOrOne($request->sendSMS);


        if ($request->dohled == true) {
            $noMonitor = "mdi-check";
        } else {
            $noMonitor = "mdi-close";

            $update = Channel::find($request->channelId);
            $update->Alert = "success";
            $update->save();

            NotFunctionChannelController::remove($request->channelId);
            VolumeAlertController::remove($request->channelId);
        }


        $data = "nazev => " . $request->nazev . " , dohled  => " . $request->dohled;
        $user = Auth::user();
        UserHistoryController::store($user->email, "edit_stream", $data);

        $update = Channel::find($request->channelId);
        $update->nazev = $request->nazev;
        $update->url = $request->url;
        $update->noMonitor = $noMonitor;
        $update->dokumentaceUrl = $request->apiUrl;
        $update->dohledVolume = $dohledVolume;
        $update->dohledBitrate = $dohledBitrate;
        $update->api = $api;
        $update->sendAlert = $sendAlert;
        $update->sendSMS = $sendSMS;
        $update->vytvoritNahled = $vytvoritNahled;

        $update->save();

        return [
            'isAlert' => "isAlert",
            'stat' => "success",
            'msg' => "Editace byla úspěšná",
        ];
    }


    /**
     * fn pro spustení ffproby pro analyzování kanálu
     * $request->url
     * @return array
     */
    public function ffprobe(Request $request)
    {
        $service_name = "false";

        // $freeWorkers = WorkerController::freeWorkers();
        // Overeni zda url exist
        if (Channel::where('url', $request->url)->first()) {


            $data = "url => " . $request->url . " , stav  => ERROR -> stream existuje";
            $user = Auth::user();
            UserHistoryController::store($user->email, "ffprobe", $data);

            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                "msg" => "Kanál s touto url již je zaveden"
            ];
        }

        $output = shell_exec("ffprobe -v quiet -print_format json -show_programs " . $request->url . " -timeout 10");

        $json_decode = json_decode($output, true);

        if (!array_key_exists("programs", $json_decode)) {


            $data = "url => " . $request->url . " , stav  => FFProbe crash";
            $user = Auth::user();
            UserHistoryController::store($user->email, "ffprobe", $data);


            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                "msg" => "Nepodařilo se provést analýzu!"
            ];
            die;
        }

        if (isset($json_decode["programs"][0]["tags"]["service_name"])) {
            $service_name = $json_decode["programs"][0]["tags"]["service_name"];
        }

        $data = "url => " . $request->url . " , stav  => OK";
        $user = Auth::user();
        UserHistoryController::store($user->email, "ffprobe", $data);
        // navrat hodnot
        return [
            'isAlert' => "isAlert",
            'stat' => "success",
            'msg' => "Ananlýza byla úspěšná",
            "nazev" => $service_name,
            "url" => $request->url,
            // "freeWorkers" => $freeWorkers
        ];
    }

    /**
     * fn pro získání vsech kanálů
     *
     * @return void
     */
    public function getAllChannels()
    {
        return Channel::get(['id', 'nazev', 'url', 'radio', 'img', 'noMonitor', 'Alert', 'dokumentaceUrl', 'api', 'dohledVolume', 'dohledBitrate', 'sendAlert', 'vytvoritNahled', 'sendSMS']);
    }

    /**
     * fn pro custom velikost mozaiky -> pocet kanálu per stránka
     *
     * @return Channels
     */
    public function pagination()
    {
        $user = Auth::user();
        if (empty($user)) {
            // none uživatel není znám
        } else {
            // fn pro overení ze URL existuje, pokud neexistuje zmeni se na /storage/noImg.jpg
            foreach (Channel::where('locked', "unlocked")->get() as $channel) {
                $img = str_replace("/storage/", "", $channel["img"]);

                // overeni zda jiz existoval img
                if ($channel["img"] != "/storage/noImg.jpg") {
                    // vyhledání původního náhledu a odstranění z filesystemu
                    if (!file_exists(public_path('storage/' . $img))) {
                        Channel::find($channel->id)->update(['img' => "/storage/noImg.jpg"]);
                    }
                }
            }

            if ($user->mozaikaAlphaBet == "true") {
                return Channel::where('noMonitor', "mdi-check")->orderBy('nazev', 'asc')->paginate($user->pagination, ['id', 'nazev', 'img', 'Alert', 'audioLang', 'api', 'dohledVolume', 'dohledBitrate', 'dokumentaceUrl']);
            } else {

                return Channel::where('noMonitor', "mdi-check")->paginate($user->pagination, ['id', 'nazev', 'img', 'Alert', 'audioLang', 'api', 'dohledVolume', 'dohledBitrate', 'dokumentaceUrl']);
            }
        }
    }


    /**
     * fn pro aktualizaci zaznamu u daného kanálu
     *
     * @param [string] $column
     * @param [string] $data
     * @param [string] $channelId
     * @return void
     */
    public static function update($column, $data, $channelId)
    {
        Channel::where('id', $channelId)->update([$column, $data]);
    }


    /**
     * fn pro zíkání detailních informací o kanálu
     *
     * @param Request $request->id
     * @return void
     */
    public function getDetail(Request $request)
    {
        $channel = Channel::where('id', $request->id)->first();

        return [
            'id' => $channel->id,
            'img' => $channel->img,
            'nazev' => $channel->nazev,
            'poznamka' => $channel->poznamka,
            'dokumentaceUrl' => $channel->dokumentaceUrl

        ];
    }

    public function getBitrate(Request $request)
    {
        $bitrate = "0 Mbps";

        $channel = Channel::where('id', $request->id)->first();

        $json = json_decode($channel->FFProbe, true);
        if (!array_key_exists("streams", $json)) {
            $bitrate = array(
                'bit_rate' => "0 Mbps"
            );
        } else {
            foreach ($json["streams"] as $stream) {
                $bitrate = $stream;
            }
        }

        return $bitrate;
    }

    /**
     * fn pro získání video / audio formátů z ffprobe
     *
     * @param Request $request->channelId
     * @return void
     */
    public function getVideoAudioFormat(Request $request)
    {
        $video = array();
        $audio = array();

        $channel = Channel::where('id', $request->id)->first();

        $json = json_decode($channel->FFProbe, true);
        if (!array_key_exists("streams", $json)) {
            $audio = array(
                'codec_name' => "error"
            );
            $video = array(
                'codec_name' => "error"
            );
        } else {
            foreach ($json["programs"][0]["streams"] as $streams) {
                if (array_key_exists("codec_type", $streams) && $streams["codec_type"] == "audio") {

                    $audio = array(
                        'codec_name' => $streams["codec_name"]
                    );
                    break;
                } else {
                    $audio = array(
                        'codec_name' => "error"
                    );
                }
            }

            foreach ($json["programs"][0]["streams"] as $streams) {
                if (array_key_exists("codec_type", $streams) && $streams["codec_type"] == "video") {
                    $video = array(
                        'codec_name' => $streams["codec_name"]
                    );
                    break;
                } else {
                    $video = array(
                        'codec_name' => "error"
                    );
                }
            }
        }

        return [
            'audio' => $audio,
            'video' => $video
        ];
    }


    /**
     * fn pro získání výpisu ffproby daného kanálu, dle id
     *
     * @param Request $request->id
     * @return void
     */
    public function getFFprobe(Request $request)
    {
        $programsData = array();
        $videoStreams = array();
        $audioStreams = array();

        $channel = Channel::where('id', $request->id)->first();
        // $channel = Channel::where('id', "69")->first();

        $ffprobe = json_decode($channel->FFProbe, true);

        if (!array_key_exists("programs", $ffprobe)) {
            return "false";
        } else {
            // vytvoření stromu
            foreach ($ffprobe["programs"] as $programs) {
                data_set($programsData[], 'name', "program_id: " . $programs["program_id"]);
                data_set($programsData[], 'name', "program_num: " . $programs["program_num"]);
                data_set($programsData[], 'name', "nb_streams: " . $programs["nb_streams"]);
                data_set($programsData[], 'name', "pmt_pid: " . $programs["pmt_pid"]);
                data_set($programsData[], 'name', "pcr_pid: " . $programs["pcr_pid"]);
                if (array_key_exists("tags", $programs) && array_key_exists("service_name",  $programs["tags"])) {
                    data_set($programsData[], 'name', "service_name: " . $programs["tags"]["service_name"]);
                }
                if (array_key_exists("tags", $programs) && array_key_exists("service_provider",  $programs["tags"])) {
                    data_set($programsData[], 'name', "service_provider: " . $programs["tags"]["service_provider"]);
                }
            }

            foreach ($ffprobe["programs"][0]["streams"] as $streams) {
                if (array_key_exists("codec_type", $streams)) {
                    // nalezeni audia
                    if ($streams["codec_type"] == "audio") {
                        data_set($audioStreams[], 'name', "index: " . $streams["index"]);
                        data_set($audioStreams[], 'name', "codec_name: " . $streams["codec_name"]);
                        data_set($audioStreams[], 'name', "codec_long_name: " . $streams["codec_long_name"]);
                        if (array_key_exists("profile", $streams)) {
                            data_set($audioStreams[], 'name', "profile: " . $streams["profile"]);
                        }
                        data_set($audioStreams[], 'name', "codec_type: " . $streams["codec_type"]);
                        data_set($audioStreams[], 'name', "codec_time_base: " . $streams["codec_time_base"]);
                        data_set($audioStreams[], 'name', "codec_tag_string: " . $streams["codec_tag_string"]);
                        data_set($audioStreams[], 'name', "codec_tag: " . $streams["codec_tag"]);
                        data_set($audioStreams[], 'name', "sample_fmt: " . $streams["sample_fmt"]);
                        data_set($audioStreams[], 'name', "sample_rate: " . $streams["sample_rate"]);
                        data_set($audioStreams[], 'name', "channels: " . $streams["channels"]);
                        data_set($audioStreams[], 'name', "channel_layout: " . $streams["channel_layout"]);
                        data_set($audioStreams[], 'name', "bits_per_sample: " . $streams["bits_per_sample"]);
                        data_set($audioStreams[], 'name', "id: " . $streams["id"]);
                        data_set($audioStreams[], 'name', "r_frame_rate: " . $streams["r_frame_rate"]);
                        data_set($audioStreams[], 'name', "avg_frame_rate: " . $streams["avg_frame_rate"]);
                        data_set($audioStreams[], 'name', "time_base: " . $streams["time_base"]);
                        data_set($audioStreams[], 'name', "start_pts: " . $streams["start_pts"]);
                        data_set($audioStreams[], 'name', "start_time: " . $streams["start_time"]);
                        data_set($audioStreams[], 'name', "bit_rate: " . $streams["bit_rate"]);
                        if (array_key_exists("tags", $streams) && array_key_exists("language",  $streams["tags"])) {
                            data_set($audioStreams[], 'name', "lang: " . $streams["tags"]["language"]);
                        }
                    }
                    if ($streams["codec_type"] == "video") {
                        if (array_key_exists("index", $streams)) {
                            data_set($videoStreams[], 'name', "index: " . $streams["index"]);
                        }
                        if (array_key_exists("codec_name", $streams)) {
                            data_set($videoStreams[], 'name', "codec_name: " . $streams["codec_name"]);
                        }
                        if (array_key_exists("codec_long_name", $streams)) {
                            data_set($videoStreams[], 'name', "codec_long_name: " . $streams["codec_long_name"]);
                        }
                        if (array_key_exists("profile", $streams)) {
                            data_set($videoStreams[], 'name', "profile: " . $streams["profile"]);
                        }
                        if (array_key_exists("codec_type", $streams)) {
                            data_set($videoStreams[], 'name', "codec_type: " . $streams["codec_type"]);
                        }
                        if (array_key_exists("codec_time_base", $streams)) {
                            data_set($videoStreams[], 'name', "codec_time_base: " . $streams["codec_time_base"]);
                        }
                        if (array_key_exists("codec_tag_string", $streams)) {
                            data_set($videoStreams[], 'name', "codec_tag_string: " . $streams["codec_tag_string"]);
                        }
                        if (array_key_exists("codec_tag", $streams)) {
                            data_set($videoStreams[], 'name', "codec_tag: " . $streams["codec_tag"]);
                        }
                        if (array_key_exists("width", $streams)) {
                            data_set($videoStreams[], 'name', "width: " . $streams["width"]);
                        }
                        if (array_key_exists("height", $streams)) {
                            data_set($videoStreams[], 'name', "height: " . $streams["height"]);
                        }
                        if (array_key_exists("coded_width", $streams)) {
                            data_set($videoStreams[], 'name', "coded_width: " . $streams["coded_width"]);
                        }
                        if (array_key_exists("coded_height", $streams)) {
                            data_set($videoStreams[], 'name', "coded_height: " . $streams["coded_height"]);
                        }
                        if (array_key_exists("has_b_frames", $streams)) {
                            data_set($videoStreams[], 'name', "has_b_frames: " . $streams["has_b_frames"]);
                        }
                        if (array_key_exists("level", $streams)) {
                            data_set($videoStreams[], 'name', "level: " . $streams["level"]);
                        }
                        if (array_key_exists("chroma_location", $streams)) {
                            data_set($videoStreams[], 'name', "chroma_location: " . $streams["chroma_location"]);
                        }
                        if (array_key_exists("refs", $streams)) {
                            data_set($videoStreams[], 'name', "refs: " . $streams["refs"]);
                        }
                        if (array_key_exists("is_avc", $streams)) {
                            data_set($videoStreams[], 'name', "is_avc: " . $streams["is_avc"]);
                        }
                        if (array_key_exists("nal_length_size", $streams)) {
                            data_set($videoStreams[], 'name', "nal_length_size: " . $streams["nal_length_size"]);
                        }
                        if (array_key_exists("id", $streams)) {
                            data_set($videoStreams[], 'name', "id: " . $streams["id"]);
                        }
                        if (array_key_exists("r_frame_rate", $streams)) {
                            data_set($videoStreams[], 'name', "r_frame_rate: " . $streams["r_frame_rate"]);
                        }
                    }
                }
            }

            $output[] = array(
                'id' => "1",
                'name' => "Programs",
                'children' => $programsData,
                'file' => 'mdi-television-guide',
            );

            $output[] = array(
                'id' => "2",
                'name' => "Streams",
                'file' => 'mdi-television',
                'children' => array(
                    array(
                        'id' => "3",
                        'name' => "Audio",
                        'children' => $audioStreams,
                        'file' => 'mdi-music-note',
                    ),
                    array(
                        'id' => "4",
                        'name' => "Video",
                        'children' => $videoStreams,
                        'file' => 'mdi-video',
                    )
                )

            );

            return $output;
        }
    }


    /**
     * fn pro získání všech nefunknčích kanálů
     *
     * @return void
     */
    public function getCrashedStreams()
    {
        $user = Auth::user();
        if ($user->alert == "show") {
            return $this->getNotFunctionStreams();
        }
    }

    /**
     * statická funckce pro získání nefunkčních streamů
     *
     * @return array
     */
    public static function getNotFunctionStreams()
    {
        if (Channel::where('Alert', "error")->first()) {
            return Channel::where('Alert', "error")->get();
        } else {
            return "false";
        }
    }

    /**
     * fn pro získání všech nefunknčích kanálů v dashboardu
     *
     * @return void
     */
    public function getCrashedStreamsForDashBoard()
    {
        return $this->getNotFunctionStreams();
    }

    /**
     * fn pro podbarvení ikony v navigacnim baru pro alerting
     *
     * @return void
     */
    protected function notificationIconAlert()
    {
        if (Channel::where('Alert', "error")->first()) {
            return [
                'color' => "red"
            ];
        } else {
            return [
                'color' => "white"
            ];
        }
    }


    /**
     * fn pro získání rozdílu poctu kanálu, ktere se dohleduji a ktere ne
     * vystup do pole pro pie-chart
     *
     * @return void
     */
    public function getChannelsDifference()
    {
        $output = array();
        $output[] = array("Celkový počet knálů", Channel::all()->count());
        $output[] = array("Nedohledované", Channel::where('noMonitor', "mdi-close")->count());
        return $output;
    }

    public function getPercentsChannelMonitoredForCircle()
    {
        $allChannels = Channel::all()->count(); //100%
        $channelsMdiClose = Channel::where('noMonitor', "mdi-check")->get()->count(); // nejake ceslo

        if ($allChannels == $channelsMdiClose) {
            return [
                "percent" => "100",
                "celkem" => $allChannels,
                "checl" => $channelsMdiClose
            ];
        } else {

            $onePercent = $allChannels / 100;
            return [
                "percent" => round($channelsMdiClose / $onePercent),
                "celkem" => $allChannels,
                "checl" => $channelsMdiClose
            ];
        }
    }

    public function getPercentChannelAreFunction()
    {
        $allChannels = Channel::where('noMonitor', 'mdi-check')->get()->count(); //100%
        $channelsNeco = Channel::where('Alert', "success")->where('noMonitor', 'mdi-check')->get()->count(); // nejake ceslo

        if ($allChannels == $channelsNeco) {
            return [
                "percent" => "100",
                "celkem" => $allChannels,
                "checl" => $channelsNeco
            ];
        } else {

            $onePercent = $allChannels / 100;
            // return round($channelsNeco / $onePercent);

            return [
                "percent" => round($channelsNeco / $onePercent),
                "celkem" => $allChannels,
                "checl" => $channelsNeco
            ];
        }
    }


    /**
     * fn pro ziskani nahledu z nazvu kanalu
     * @return [type] [description]
     */
    public function getNahledByName($name)
    {
        $channel = Channel::where('nazev', $name)->first();
        if ($channel != null) {
            return $channel->img;
        } else {
            return "false";
        }
    }


    /**
     * fn pro získání dat o kanálu z extermího systému
     *
     * @param Request $request->id
     * @return void
     */
    public function getDataFromAPi(Request $request)
    {
        $kanal = Channel::find($request->id);

        if ($kanal->api != null) {
            // vytažení id kanálu na dokumentaci z dokumentaceUrl
            $idKanaluZdokumentaceUrl  = explode("/", $kanal->dokumentaceUrl);

            $channelData = Http::get(ApiChannel::where('id', $kanal->api)->first()->apiUrl . $idKanaluZdokumentaceUrl["5"]);

            return $channelData->json();
        } else {
            return "false";
        }
    }

    /**
     * fm pro poslání dat o kanálech do kalendáre pro modal
     *
     * @return void
     */
    public function getChannelsForCalendar()
    {
        foreach (Channel::get() as $channel) {
            $output[] = array(
                'id' => $channel->id,
                'nazev' => $channel->nazev
            );
        }

        return $output;
    }

    /**
     * fn pro pridani nove udalosti do kalendare
     *
     * @param Request $request
     * @return void
     */
    public function save(Request $request)
    {
        Calendar::create([
            'channelId' => $request->channelId,
            'start' => $request->startDate . " " . $request->startTime,
            'end' => $request->endDate . " " . $request->endTime,
            'color' => "error"
        ]);

        return [
            'isAlert' => "isAlert",
            'status' => "success",
            'msg' => "přidána nová událost"
        ];
    }
}
