var speed : float = 10;
 
 
function Update () {
 
    if (Input.touchCount > 0) 
    {
        var touchDeltaPos:Vector2 = Input.GetTouch(0).position;
        if(Input.touchCount>1)
            var touchDeltaPos2:Vector2 = Input.GetTouch(1).position;
        if(touchDeltaPos.x<Screen.width/2)
        {
            if(touchDeltaPos.y > Screen.height/2)
            {
                rigidbody2D.velocity.y = 1*speed;
            }
            else rigidbody2D.velocity.y = -1*speed;
        }
        else if(touchDeltaPos2.x<Screen.width/2&&Input.touchCount>1)
        {
            if(touchDeltaPos2.y > Screen.height/2)
            {
                rigidbody2D.velocity.y = 1*speed;
            }
            else rigidbody2D.velocity.y = -1*speed;
        }
    }
    if (Input.touchCount == 0)
        rigidbody2D.velocity.y = 0;
    rigidbody2D.velocity.x=0;
}