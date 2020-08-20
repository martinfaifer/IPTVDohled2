<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        '/api/channel/nahled/{name}',
        '/api/channel/crashed/{name}',
        '/api/channel/event/{id}',
        '/api/communication/caledar',
        '/api/channel/get/img',
        '/api/channel/get_data_if_exist_or_return_false',
        '/api/getVolumeDataFromDohledForChart',
        '/api/getBitrateDataFromDohledForChart'
    ];
}
