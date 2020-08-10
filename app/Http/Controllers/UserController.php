<?php

namespace App\Http\Controllers;

use App\APIKey;
use App\MailAlerts;
use App\User;
use App\UserHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use PhpParser\Node\Stmt\TryCatch;

class UserController extends Controller
{
    public function getAll()
    {
        if (User::first()) {
            foreach (User::get() as $user) {
                $output[] = array(
                    'id' => $user->id,
                    'name' => $user->name,
                    'surname' => $user->surname,
                    'email' => $user->email,
                    'user_role' => $user->user_role,
                    'pagination' => $user->pagination,
                    'alert' => $user->alert,
                    'dense' => $user->dense,
                    'mozaikaAlphaBet' => $user->mozaikaAlphaBet,
                    'avatar' => $user->avatar,
                    'apiKey' => APIKeyController::getByUser($user->id)
                );
            }

            return $output;
        }
    }


    /**
     * přihlášení
     *
     * @param Request $request
     * @return void
     */
    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], true)) {
            return [
                'isAlert' => "isAlert",
                'stat' => "success",
                'msg' => "Úspěšně přihlášeno",
            ];
        } else {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Nesprávné údaje!",
            ];
        }
    }


    public function logOut()
    {
        Auth::logout();
        return [
            'isAlert' => "isAlert",
            'stat' => "error",
            'msg' => "Odhlášeno!",
        ];
    }


    public function getUser()
    {
        $user = Auth::user();
        if (empty($user)) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Nejste přihlášen!",
            ];
        } else {
            if ($user->dense != "true") {
                $dense = false;
            } else {
                $dense = true;
            }

            if ($user->mozaikaAlphaBet != "true") {
                $mozaikaAlphaBet = false;
            } else {
                $mozaikaAlphaBet = true;
            }

            if (MailAlerts::where('mail', $user->email)->first()) {
                $mailMotifikace = true;
            } else {
                $mailMotifikace = false;
            }

            if ($user->avatar != null) {
                $avatar = $user->avatar;
            } else {
                $avatar = false;
            }

            if (APIKey::where('userId', $user->id)->first()) {
                $apiKey = APIKey::where('userId', $user->id)->first()->apiKey;
            } else {
                $apiKey = false;
            }

            return [
                'id' => $user->id,
                'name' => $user->name,
                'surname' => $user->surname,
                'email' => $user->email,
                'user_role' => $user->user_role,
                'pagination' => $user->pagination,
                'alert' => $user->alert,
                'dense' => $dense,
                'mozaikaAlphaBet' => $mozaikaAlphaBet,
                'mailMotifikace' => $mailMotifikace,
                'avatar' => $avatar,
                'apiKey' => $apiKey
            ];
        }
    }


    /**
     * editace uživatele
     * mail,
     * heslo,
     * aleting,
     * pagination,
     * razeni kanálu v mozaice
     *
     * @param Request $request
     * @return void
     */
    public function editUser(Request $request)
    {
        try {
            if ($request->dense == true) {
                $dense = "true";
            } else {
                $dense = "false";
            }

            if ($request->mozaikaAlphaBet == true) {
                $mozaikaAlphaBet = "true";
            } else {
                $mozaikaAlphaBet = "false";
            }

            if ($request->mailMotifikace == true) {

                if (MailAlerts::where('mail', $request->mail)->first()) {

                    // mail je již zaveden

                } else {

                    MailAlerts::create([
                        'mail' => $request->mail
                    ]);
                }
            } else {
                // odebrání mailu z alertu
                // kontrola, zda vubec existuje mail k odebrani
                if (MailAlerts::where("mail", $request->mail)->first()) {
                    $idAlertuNaSmazani = MailAlerts::where("mail", $request->mail)->first()->id;
                    MailAlerts::find($idAlertuNaSmazani)->delete();
                }
            }

            $update = User::find($request->userId);
            $update->email = $request->mail;
            $update->dense = $dense;
            $update->mozaikaAlphaBet = $mozaikaAlphaBet;
            $update->pagination = $request->pagination;
            if (!empty($request->password)) {
                $update->password = Hash::make($request->password);
            }

            $update->save();

            return [
                'isAlert' => "isAlert",
                'stat' => "success",
                'msg' => "Editace byla úspěšná",
            ];
        } catch (\Throwable $th) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Nepodařilo se z editovat uživatele, prosím obraťe se na správce",
            ];
        }
    }

    /**
     * fn pro změnu viditelnosti alertu
     *
     * @param Request $request
     * @return void
     */
    public function alertVisibility(Request $request)
    {
        $user = User::where('id', $request->userId)->first();
        if ($user->alert == "show") {
            // nastavení na hide
            $update = User::find($request->userId);
            $update->alert = "hide";
            $update->save();
        } else {
            // nastaveni na show
            $update = User::find($request->userId);
            $update->alert = "show";
            $update->save();
        }
    }


    /**
     * zalození noveho uzivatele
     *
     * @param Request $request
     * @return void
     */
    public function create(Request $request)
    {
        if ($request->name == "") {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Není vyplněno jméno!"
            ];
            die;
        }

        if ($request->surname == "") {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Není vyplněno příjmení!"
            ];
            die;
        }
        if ($request->password == "") {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Není vyplněno heslo!"
            ];
            die;
        }
        if ($request->email == "") {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Není vyplněn e-mail!"
            ];
            die;
        }

        // overeni zda mail je mail
        if (!filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "nesprávný formát e-mailu!"
            ];
            die;
        }

        // overeni zda jiz je mail zalozen
        if (User::where("email", $request->email)->first()) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Uživatel s tímto e-mailem je již založen!"
            ];
            die;
        }

        $data = "jmeno => " . $request->name . " , prijmeni => " . $request->surname . " , email => " . $request->email . ' , uživatelská role => ' . $request->userRole;
        $user = Auth::user();
        UserHistoryController::store($user->email, "create", $data);

        User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'user_role' => $request->userRole,
            'password' => Hash::make($request->password),
        ]);
        return [
            'isAlert' => "isAlert",
            'stat' => "success",
            'msg' => "Založen nový uživatel"
        ];
    }


    public function remove(Request $request)
    {
        $userFind = User::where('id', $request->userId)->first();
        $user = Auth::user();
        UserHistoryController::store($user->email, "delete", $userFind->email);
        User::find($request->userId)->delete();

        return [
            'isAlert' => "isAlert",
            'stat' => "success",
            'msg' => "Uživatel byl smazán!"
        ];
    }

    /**
     * získání informací o userovi vcetne informace o tom, zda se mu posílá jakýkoliv alert
     *
     * @param Request $request
     * @return void
     */
    public function getUserdata(Request $request)
    {
        $user = User::where('id', $request->userId)->first();

        return [
            'id' => $user->id,
            'name' => $user->name,
            'surname' => $user->surname,
            'email' => $user->email,
            'user_role' => $user->user_role,
            'pagination' => $user->pagination,
            'alert' => $user->alert,
            'dense' => $user->dense,
            'mozaikaAlphaBet' => $user->mozaikaAlphaBet,
            'avatar' => $user->avatar,
            'apiKey' => APIKeyController::getByUser($user->id)
        ];
    }


    /**
     * settings editace uzivatele
     *
     * @param Request $request
     * @return void
     */
    public function edit(Request $request)
    {
        if ($request->name == "") {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Není vyplněno jméno!"
            ];
            die;
        }

        if ($request->surname == "") {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Není vyplněno příjmení!"
            ];
            die;
        }


        if ($request->email == "") {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "Není vyplněn e-mail!"
            ];
            die;
        }

        // overeni zda mail je mail
        if (!filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
            return [
                'isAlert' => "isAlert",
                'stat' => "error",
                'msg' => "nesprávný formát e-mailu!"
            ];
            die;
        }


        // založení api klice
        if ($request->createAPI == true) {
            APIKeyController::create($request->userId);
        }

        // odebrání api klice
        if ($request->removeAPI == true) {
            APIKeyController::remove($request->userId);
        }


        $data = "jmeno => " . $request->name . " , prijmeni => " . $request->surname . " , email => " . $request->email . " , user role => " . $request->userRole;
        $user = Auth::user();
        UserHistoryController::store($user->email, "edit", $data);

        $update = User::find($request->userId);
        $update->name = $request->name;
        $update->surname = $request->surname;
        $update->email = $request->email;
        $update->user_role = $request->userRole;
        if (!empty($request->password)) {
            $update->password = Hash::make($request->password);
        }

        $update->save();

        return [
            'isAlert' => "isAlert",
            'stat' => "success",
            'msg' => "Editace byla úspěšná",
        ];
    }
}
