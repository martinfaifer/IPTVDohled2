<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="shortcut icon" href="img/icon/favicon.ico" type="image/x-icon">
        <title>{{ config('app.name', 'IPTV Dohled') }}</title>
        <script>
            window.Laravel = {!! json_encode([
                'csrfToken' => csrf_token(),
            ]) !!};


        </script>
        <script src="{{ asset('js/app.js') }}" defer></script>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <script src="https://js.pusher.com/5.1/pusher.min.js"></script>
        {{-- css --}}
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/pageNotFound.css') }}" rel="stylesheet">
        <link href="{{ asset('css/style.css') }}" rel="stylesheet">


    </head>
    <body>

{{--
@if ($volumeErr == "false")

@else
Kanály, kde se nepodařilo detekovat zvukovou stopu:

@foreach ($volumeErr as $volume)
{{ $volume }}
@endforeach
@endif


---------------------------------------------------------------------------------------------------
@if ($crashChannels == "false")

@else
Kanály, které nefungují:

@foreach ($crashChannels as $crash)
{{ $crash }}
@endforeach
@endif
 --}}

 <h3>Kanály, které nefungují:</h3>

 <ol>
<li @foreach ($crashChannels as $crash)>
    {{ $crash }}
</li @endforeach>
 </ol>



    </body>
</html>
