<?php

namespace App\Http\Controllers;

use App\User;
use App\UserHistory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function getAll()
    {
        return User::all();
    }


    /**
     * přihlášení
     *
     * @param Request $request
     * @return void
     */
    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], $request->remember)) {
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
            return $user;
        }
    }


    /**
     * fn pro editaci usera
     *
     * @param Request $request
     * @return void
     */
    public function editUser(Request $request)
    {
        $update = User::find($request->userId);
        $update->email = $request->mail;
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


    public function getUserdata(Request $request)
    {
        return User::where('id', $request->userId)->first();
    }

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
