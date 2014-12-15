#pragma strict

var baalSpeed : float = 100;

function Start () {
 yield WaitForSeconds (2);
 Goball ();
}

 function Update () {
  var xVel : float = rigidbody2D.velocity.x;
  if (xVel < 18 && xVel > -18 && xVel != 0) {
  if (xVel > 0) {
  rigidbody2D.velocity.x = 20;
  }
  else {
  rigidbody2D.velocity.x = -20;
  }
  }
  Debug.Log ("Velocity before " + xVel);
  Debug.Log ("Velocity after" + rigidbody2D.velocity.x);
 }

function OnCollisionEnter2D (colInfo : Collision2D) {
	if (colInfo.collider.tag == "Player") {
		rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
		audio.pitch = Random.Range(0.8f, 1.2f);
	    audio.Play();
	}
}

	function Resetball () {
	 rigidbody2D.velocity.y = 0;
	 rigidbody2D.velocity.x = 0;
	 transform.position.x = 0;
	 transform.position.y = 0;

	 yield WaitForSeconds (0.5);
	 Goball ();
	

	}
	function Goball () {
	var randomNumber = Random.Range(0, 2);
	if (randomNumber <= 0.5) {
		rigidbody2D.AddForce (new Vector2 (baalSpeed, 10));
	}
	else {
		rigidbody2D.AddForce (new Vector2 (-baalSpeed, -10));
	}
	}