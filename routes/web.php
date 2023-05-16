<?php

use App\Http\Controllers\AnalyticsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Index
Route::get('/index', function () {
    return view('index');
});

// Campaigns
Route::get('/campaigns', function () {
    return view('campaigns');
});

// About
Route::get("/about", function () {
    return view('about');
});

// Subscription
Route::get("/subscription", function () {
    return view('subscription');
});

// Contact Us
Route::get("/contactUs", function () {
    return view('contactUs');
});

// Works
Route::get("/works", function () {
    return view('works');
});

// Cutserv
Route::get("/customerservice", function () {
    return view('customerservice');
});

//Marketing Automation
Route::get("/marketing-automation", function () {
    return view('marketingAutomation');
});

// Sales
Route::get("/sales", function () {
    return view('sales');
});

Route::get('/payment/options', function () {
    return view('payment_options');
});


Route::get('/analytics', 'App\Http\Controllers\AnalyticsController@index')->name('analytics.index');

// Fetch Campaign List
Route::get('/analytics/fetch_campaign_list', 'App\Http\Controllers\AnalyticsController@fetch_campaign_list')->name('analytics.fetch_campaign_list');

Route::get('/graphs/getCampaignLocations', [AnalyticsController::class, 'getCampaignLocations'])->name('campaign-locations');

Route::get('/graphs', function(){
    return view('graphs');
});

Route::get('/graphs/getStageDealRatio', [AnalyticsController::class, 'getStageDealRatio'])->name('graphs.getStageDealRatio');

Route::get('/graphs', [AnalyticsController::class,'getPrefPaymentMethod']);
