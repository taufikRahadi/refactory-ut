import datetime
class Auth:
    __user = {
        # 'id': 1,
        'username': 'root',
        'password': 'secret'
    }

    __logged_in_user = {}
    __last_logged_in = ''

    @property
    def get_user(self):
        return self.__user

    def set_logged_in(self, user):
        self.__logged_in_user = user
    
    def set_last_logged_in(self):
        self.__last_logged_in = datetime.datetime.now()

    @property
    def get_logged_in(self):
        return self.__logged_in_user
    
    @property
    def get_last_logged_in(self):
        return self.__last_logged_in

    def login(self, user):
        if user == self.get_user:
            self.set_logged_in(user)
            self.set_last_logged_in()
            return 'logged in'
        else:
            return 'invalid credentials'
    
    def check(self): 
        return bool(self.get_logged_in)
    
    def validate(self, user):
        return user == self.get_user
    
    def guest(self):
        return not(self.check())

auth = Auth()
print(auth.login({'username': 'root', 'password': 'secret'}))
print(auth.validate({'username': 'root', 'password': 'secret'}))
print(auth.get_logged_in)
print(auth.check())
print(auth.guest())
print(auth.get_last_logged_in)
