function shout(string){
    return string.toUpperCase();
    } 
    
    function whisper(string){
        return string.toLowerCase();
    }
    
    function logShout(string){
        console.log(string.toUpperCase())
    }
    
    function logWhisper(string){
        console.log(string.toLowerCase())
    }
    
    function sayHiToHeadphonedRoommate(string){
        var CantHearYou = "I can't hear you!";
        var CanHearYou = "YES INDEED!";
        var LoveAnswer = "I would love to!";
        if(string.toLowerCase(string)===string){
            return CantHearYou;
        }
        else if (string.toUpperCase(string)===string){
            return CanHearYou;
        }
        else if("Let's have dinner together!"===string){
            return LoveAnswer;
        }
    
    }