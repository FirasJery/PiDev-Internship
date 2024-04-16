package com.example.back.ServiceImp;

import com.example.back.Entities.User;
import com.example.back.Repositories.UserRepository;
import com.example.back.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserServiceImp implements UserService {

    private final UserRepository userRepos;
    @Override
    public String getmailUserByJournal(Long idJournal) {
        User u = userRepos.findByConventionSet_Stage_Journal(idJournal);

         return  u.getEmail();

    }
}
