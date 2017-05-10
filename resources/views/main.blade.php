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
        <script type="text/javascript" src="{{ URL::asset('js/jquery-3.2.1.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/logviewer.js') }}"></script>

        <!-- Styles -->
        <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}" />
        <style>
            html, body {
                padding-top: 2em;
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
        </style>
    </head>
    <body>
        <div class="full-height container">
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

            <div class="row" >
                <form action="viewfile" id="log-form" method="GET">
                    <div class="form-group">
                        <div class="col-xs-8 col-md-10">
                             <input type="text" class="form-control" name="logFilePath" id="logFilePath" placeholder="path/to/file">
                        </div>
                        <div class="col-xs-4 col-md-2">
                            <button type="submit" id="viewLog" name="viewLog" class="btn btn-default active">View</button>
                        </div>
                    </div>
                    {{ csrf_field() }}
                 </form>  
            </div>

            <div class="row" id="logs" >
            </div>

            <div class="row col-md-12 text-center">
                <ul class="pagination">
                  <li><a href="#" id="go-to-beginning">|&#60;</a></li>
                  <li><a href="#" id="prev-ten">&#60;</a></li>
                  <li><a href="#" id="next-ten">&#62;</a></li>
                  <li><a href="#" id="go-to-end">&#62;|</a></li>
                </ul>
            </div> 

            
        </div>
    </body>
</html>
