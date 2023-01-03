# Formkl submission

Formkl submission is declared with the function-like syntax `<HttpMethod> "(" <url> ")"`

## Simple usage

```text
formkl post("/subscribe") {
  has {
    "Your Email" text;
  }
}
```

## With title and description

```text
formkl post("/subscribe")
	"Subscribe to our newsletter"
	"Get the latest news and updates from us"
{
  has {
    "Your Email" text;
  }
}
```
