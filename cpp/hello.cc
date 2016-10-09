#include <iostream>

using namespace std;

int main() {
  char str[10];
  int a = 0, b = 0;
  strcpy(str, "123456789");
  cout << str << endl;
  cout << a << endl;
  cout << b << endl;
  cout << a++ << endl;
  cout << ++b << endl;
  cout << a << endl;
  cout << b << endl;
  return 0;
}
