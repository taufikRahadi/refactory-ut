class Validator
{
    constructor(data, rules, message)
    {
        this.data = data
        this.rules = rules
        this.message = message
    }

    validate()
    {
        if(this.rules.has('email')) {
            
        }
    }
}

const data = {
    username: 'mul14',
    email: 'email@example.com',
    name: 'Mulia',
    zip: 75324,
    is_admin: true,
    age: 28,
  }
  
  const rules = {
    username: 'required|alphanum',
    email: 'required|email',
    name: 'required',
    zip: 'required|numeric',
    is_admin: 'boolean',
    age: 'numeric|min:21',
  }
  
  // The message is optional. But user should be able to customize the messages.
  const message = {
    required: 'The %s field is required.',              // Message will be "The username field is required."
    age: 'The %s field must a number.',
    email: 'The %s field must be a email'
  }

  console.log()