<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="shortcut icon" href="img/icon/favicon.ico" type="image/x-icon">
        <title>{{ config('app.name') }}</title>
        <script>
            window.Laravel = {!! json_encode([
                'csrfToken' => csrf_token(),
            ]) !!};


        </script>
        <script src="{{ asset('js/app.js') }}" defer></script>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        {{-- css --}}
        <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('css/pageNotFound.css') }}" rel="stylesheet">
        <link href="{{ asset('css/style.css') }}" rel="stylesheet">


    </head>
    <body>

      <h3 style="color: black">
        Kanál {{$channel}} je
        @if ($status === 'KO')
        nedostupný
        @else
        v pořádku
        @endif

        @if ($vypadek === 'false')

        @else
      </h3>
      <p>
          Výpadek trval od {{$vypadek->ko_time}} do {{$vypadek->ok_time}}
      </p>
      @endif

      <p>
          <a href="{{ $grafUrl }}" target="_blank">Odkaz na grafy</a>
      </p>
    </body>
</html>
