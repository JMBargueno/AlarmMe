package com.escacena.alarmme.service;

import com.escacena.alarmme.request.RequestLogin;
import com.escacena.alarmme.request.RequestRegister;
import com.escacena.alarmme.response.ResponseAllAlarm;
import com.escacena.alarmme.response.ResponseLogin;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface ServiceAlarmMeAPI {
    @POST("login")
    Call<ResponseLogin> login(@Body RequestLogin request);

    @POST("register")
    Call<ResponseLogin> register(@Body RequestRegister request);

    @GET("alarms")
    Call<List<ResponseAllAlarm>> getAllAlarms ();
}
