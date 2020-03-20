package com.escacena.alarmme.viewmodel;

import android.app.Application;

import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import com.escacena.alarmme.repository.UserRepository;

import com.escacena.alarmme.response.ResponseDeletePicture;
import com.escacena.alarmme.response.ResponsePicture;
import com.escacena.alarmme.response.ResponseUser;

import lombok.NonNull;
import okhttp3.MultipartBody;

public class UserViewModel extends AndroidViewModel {
    private UserRepository repository;

    public UserViewModel(@NonNull Application application) {
        super(application);
        repository = new UserRepository();
    }

    public LiveData<ResponseUser> getCurrentUser(){return repository.getCurrentUser();}
    public LiveData<ResponsePicture> getCurrentUserPicture(){return repository.getCurrentUserPicture();}
    public LiveData<ResponseDeletePicture> deletePicture(){return repository.deletePicture();}
    public LiveData<ResponseUser> updatePicture(MultipartBody.Part picture){return repository.updatePicture(picture);}
}