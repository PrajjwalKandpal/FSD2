from app import app

def test_home():
    client = app.test_client()
    res = client.get("/")
    assert res.status_code == 200
    assert "Backend Running" in res.json["message"]

def test_process():
    client = app.test_client()
    res = client.post("/process", json={"name": "lucifer"})
    
    assert res.status_code == 200
    assert res.json["upper"] == "LUCIFER"
    assert res.json["length"] == 7