import datetime
import random
class Log:
    levels = [
        'emergency',
        'alert',
        'critical',
        'error',
        'warning',
        'notice',
        'info',
        'debug'
    ]
    message = [
        'System hung. Contact system administrator immediately!',
        'Achtung! Achtung!',
        'Medic!! Weve got critical damages.',
        'We cant divide any numbers by zero.',
        'Insufficient funds.',
        'Someone loves your status.',
        'This is an information about something.',
        'This is debug message.'
    ]

    filename = 'app.log'

    def __init__(self):
        i = random.choice(range(len(self.message)))
        text = f'[{datetime.datetime.now().isoformat()}] {self.levels[i].upper()} {self.message[i].capitalize()}'
        with open(self.filename, 'a') as f:
            f.write(f'{text} \n')
    
Log()
