<?php

use App\Channel;
use App\ChannelErrorTime;
use App\Events\SendDesktopAlert;
use App\IPTVDevice;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/video', function () {
    return view('video');
});


Route::get('/api/channels', 'ChannelController@getAllChannels');
Route::get('/api/channels/pagination', 'ChannelController@pagination');
Route::post('/api/channel/getDetail', 'ChannelController@getDetail');
Route::post('/api/channel/bitrate', 'ChannelController@getBitrate');
Route::get('/channel/bitrate/hourdata/{id}', 'BitrateController@getHourData');
Route::post('/api/channel/ffprobeGet', 'ChannelController@getFFprobe');
Route::post('/api/channel/ffprobe/formats', 'ChannelController@getVideoAudioFormat');
Route::post('/api/channel/volume', 'VolumeController@getChannelVolumesForHour');
Route::post('/api/channel/volume/dayData', 'VolumeController@getChannelVolumesForADay');
Route::post('/api/channel/bitrates', 'BitrateController@getChannelBitratesForHour');
Route::post('/api/channel/bitrate/dayData', 'BitrateController@getChannelBitratesForADay');
Route::get('/api/channels/crashed', 'ChannelController@getCrashedStreams');
Route::post('/api/channel/chart/crash/hour', 'ChannelErrorTimeController@getLasDayData');
Route::get('/api/bitrate/delteOlderThanTwoDays', 'BitrateController@delteOlderThanTwoDays');

Route::get('/api/settings/dashboard/crashedChannels', 'CrashedChannelController@takeTopTenCrashedChannels');
Route::get('/api/settings/dashboard/chartChannel', 'ChannelController@getChannelsDifference');

Route::post('/api/testVolume', 'FFProbeDataController@getVolumeLevelFromStream');

// Workers
Route::get('/api/channel/freeWorkers', 'WorkerController@freeWorkers');

// SETTINGS->CHANNELS
Route::post('/api/channel/ffprobe', 'ChannelController@ffprobe');
Route::post('api/channel/create', 'ChannelController@store');
Route::post('/api/channel/delete', 'ChannelController@delete');
Route::post('/api/channel/getdata', 'ChannelController@getChannelData');
Route::post('/api/channel/edit', 'ChannelController@edit');
Route::post('/api/channel/alerting/get', 'VolumeExceptionController@getChannelData');
Route::post('/api/channel/alerting/edit', 'VolumeExceptionController@store');
Route::post('/api/channel/alerting/remove', 'VolumeExceptionController@remove');
Route::post('/api/channel/chart/volume/custom', 'VolumeController@getDataFromTo');
Route::post('/api/channel/chart/bitrate/custom', 'BitrateController@getDataFromTo');
Route::post('/api/channel/chart/error/custom', 'CrashedChannelController@getDataFromTo');


// DASHBOARD
Route::get('/api/channels/percent', 'ChannelController@getPercentsChannelMonitoredForCircle');
Route::get('/api/channels/functions/percent', 'ChannelController@getPercentChannelAreFunction');


Route::get('/api/mailAlert/getAll', 'MailAlertsController@getAll');
Route::post('/api/mailAlert/store', 'MailAlertsController@store');
Route::post('/api/mailAlert/remove', 'MailAlertsController@remove');


Route::post('/api/user/login', 'UserController@login');
Route::get('/api/user/logout', 'UserController@logOut');
Route::post('/api/user/edit', 'UserController@editUser');
Route::post('/api/user/alert/visibility', 'UserController@alertVisibility');
Route::get('/api/user/get', 'UserController@getUser');
Route::get('/api/users/get', 'UserController@getAll');
Route::post('/api/user/create', 'UserController@create');
Route::post('/api/user/remove', 'UserController@remove');
Route::post('/api/user/settings/edit', 'UserController@edit');
Route::post('/api/user/getUserdata', 'UserController@getUserdata');


Route::get('/api/channel/nahled/{name}', 'ChannelController@getNahledByName');
Route::get('/api/channel/crashed/{name}', 'NotFunctionChannelController@getCrashedChannel');

// Hardware
Route::get('/api/disk', 'HardwareController@getDifferenceDiskSpace');
Route::get('/api/sysdata', 'HardwareController@sysdata');
Route::get('/api/devices', 'IPTVDeviceController@getDevices');

Route::get('/api/device/check', 'IPTVDeviceController@deviceCheck');

Route::get('/api/channels/audioProblem', 'VolumeAlertController@getAll');
Route::get('/api/channels/audio/chart', 'VolumeAlertController@difference');


// history
Route::get('/api/users/history', 'UserHistoryController@getAll');
Route::get('/api/mail/history', 'MailHistoryController@getAll');

// Route::get('event', function () {
//     $channel = Channel::first();
//     event(new SendDesktopAlert($channel));
// });

// Route::get('/api/ffprobeData/get', function () {
//     $data = App\Channel::where('id', "11")->first();
//     return json_decode($data->FFProbe, true);
// });
