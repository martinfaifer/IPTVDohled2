@if ($sms === 'true')

{{$channel}} je
        @if ($status === 'KO')
        nedostupný
        @else
        v pořádku
        @endif

@else


<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
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
      @if ($grafUrl === 'false')

      @else
      <p>
          <a href="{{ $grafUrl }}" target="_blank">Odkaz na grafy</a>
      </p>

      @endif
    </body>
</html>

@endIf
