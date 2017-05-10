<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- JS -->
        <!-- <script type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script> -->
        <script type="text/javascript" src="{{ URL::asset('js/logviewer.js') }}"></script>

        <!-- Styles -->
        <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}" />
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway', sans-serif;
                font-weight: 100;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }
/*
            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }*/
        </style>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            @if (Route::has('login'))
                <div class="top-right links">
                    @if (Auth::check())
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ url('/login') }}">Login</a>
                        <a href="{{ url('/register') }}">Register</a>
                    @endif
                </div>
            @endif

            <div class="content">
                <div class="title m-b-md">
                    Log File Viewer
                </div>
            </div>

            <div id="main-container" class="col-md-9 row">
                    <form action="viewfile" id="log-form" method="GET" enctype="multipart/form-data">
                        <div class="form-group"> 
                            <label for="logFile">File input</label> 
                            <input type="file" id="logFile" name="logFile"> 
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="logFilePath" id="logFilePath" placeholder="path/to/file">
                            <button type="submit" class="btn btn-default">View</button>
                        </div>
                    </form>   
            </div>
            
        </div>
    </body>
</html>
