<?php

namespace App\Http\Controllers;

use App\Note;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NoteController extends Controller
{
    /**
     * zobrazení komentáru u kanálu
     *
     * zonrazení komentru dle Id kanálu
     *
     * u komenter se uklada channelId a userId
     *
     * @param Request $request
     * @return void
     */
    public function get(Request $request)
    {
        $user = Auth::user();

        // overeni ze kanal ma nejkou poznaku
        if (Note::where('channelId', $request->id)->first()) {
            foreach (Note::where('channelId', $request->id)->take(8)->get() as $note) {

                if (User::where('id', $note->userId)->first()->email ===  $user->email) {
                    $showActions = true;
                } else {
                    $showActions = false;
                }
                // vyhlednání uživatele dle poznámky, pridání do pole notes
                $notes[] = array(
                    'id' => $note->id,
                    'note' => $note->note,
                    'user' => User::where('id', $note->userId)->first()->email ?? "smazaný úživatel",
                    'avatar' => User::where('id', $note->userId)->first()->avatar ?? false,
                    'showActions' => $showActions,
                    'created_at' => $note->created_at->toDateTimeString()
                );
            }

            return $notes;
        } else {

            return "false";
        }
    }


    /**
     * fn pro vytvoření nové poznámky u kanálu
     *
     * @param Request $request
     * @return void
     */
    public function create(Request $request)
    {
        try {
            $user = Auth::user();
            Note::create([
                'userId' => $user->id,
                'channelId' => $request->channelId,
                'note' => $request->note
            ]);

            return;
        } catch (\Throwable $th) {
            return [
                'status' => "error",
                'isAlert' => "isAlert",
                'msg' => "nepodařilo se vytvořit novou zprávu"
            ];
        }
    }


    /**
     * fn pro odebrání poznámky
     *
     * @param Request $request
     * @return void
     */
    public function remove(Request $request)
    {
        Note::find($request->noteId)->delete();
    }
}
