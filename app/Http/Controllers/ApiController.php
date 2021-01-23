<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class ApiController extends Controller
{
    public function index()
    {
        $tag_id = "a1a357b8cd4732e4d9c84ecc9a1d7406";
        $url = "https://api.themoviedb.org/3/movie/now_playing?api_key=" . $tag_id;
        $method = "GET";

        //接続
        $client = new Client();

        $response = $client->request($method, $url);

        $posts = $response->getBody();
        // $posts = json_decode($posts, true);
        // dd($posts['results']);
        return $posts;
    }
}
