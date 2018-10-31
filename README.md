# cors-anywhere image

This image packages [cors-anywhere](https://www.npmjs.com/package/cors-anywhere) so you can send any request to any machine through this. Can be used as a simple proxy.

```sh
docker run --restart always -d --name cors-anywhere -p 30080:80 yasinuslu/cors-anywhere
```

You can send a request with it like following:
```sh
curl --request GET \
  --url http://localhost:30080/http://example.com \
  --header 'origin: *'
```
