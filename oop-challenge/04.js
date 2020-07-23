class Config
{
    constructor(instance)
    {
        this.config = instance
    }

    put(key, value)
    {
        this.config.put()
    }


}

class ConfigFileStorage 
{
    constructor(filename)
    {
        this.configFile = filename
    }

    put(key, value)
    {

    }
}

class Nedb
{

}

class ConfigMysql
{

}