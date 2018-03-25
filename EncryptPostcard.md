
Received a post card from Jefferey with only a double array on it...

```c
#include <stdio.h>
int main() {
  //Encrypt - Less than 16bit might cause loss
  char a[40] = "This is freaking awesome!!!!";
  printf("%.15e,\n",*(double *)a);
  printf("%.15e,\n",*((double *)(a+8)));   
  printf("%.15e,\n",*((double *)(a+16)));
  printf("%.15e,\n",*((double *)(a+24)));

  //Decrypt
  double c[4] = {
    2.316340032524240e-152,
    1.693750092804831e+190,
    3.816951938014679e+180,
    2.746112199433326e-315
  };
  printf("%s\n\n", (char * )c); //Shis is hreakingawesome!!!!

  //Encrypt with Precision 16bit will guarantee to be lossless
  printf("%.16e,\n",*(double *)a);
  printf("%.16e,\n",*((double *)(a+8)));   
  printf("%.16e,\n",*((double *)(a+16)));
  printf("%.16e,\n",*((double *)(a+24)));

  //Decrypt
  double d[4] = {
    2.3163400325242404e-152,
    1.6937500928048305e+190,
    3.8169519380146795e+180,
    2.7461121994333263e-315       
  };
  printf("%s\n\n", (char * )d); //This is freaking awesome!!!!
}
```
