using UnityEngine;
using System.Collections;

public class AIController : MonoBehaviour
{
    Transform Enemy;

    void Start()
    {
        Enemy = GameObject.Find("Ball").transform;
    }

    void Update()
    {
        transform.position = new Vector3
            (8.0f,
             Enemy.position.y,
             transform.position.z);
    }
}