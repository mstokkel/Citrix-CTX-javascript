# Citrix CTX1 encoding/decoding (with javascript)
Citrix CTX1 encoding is the "encryption" used for the passwords that are stored in the enum.aspx file. The credentials are stored as followed:

```xml
<Credentials>
	<UserName>USERNAME</UserName>
	<Password encoding="ctx1">NFHALEBBMHGCLEBBMDGGKMAJNOHLLKBP</Password>
	<Domain type="NT">CONTOSO</Domain>
</Credentials>
```

## Reason 
Because a side project for work, I was not able to install python or any other interpeters. So I was forced to use JavaScript.

Luckily, in 2014 David Schuetz from NCCGroup wrote an [article][1] about Citrix CTX1 encryption and published python code for "encrypting" and "decrypting".

## Feedback
If you have feedback, let me know!

[1]: https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2014/january/good-fun-with-bad-crypto/