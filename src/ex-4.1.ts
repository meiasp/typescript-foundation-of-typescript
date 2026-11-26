type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return (user.age ?? 0) >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ user.age มีโอกาสเป็น number หรือ undefined หากไม่มี key นั้นอยุ่ใน object เลยใส่ว่ากรณีไม่ได้ใส่อายุให้ถือว่าเป็นเด็ก (แทนเป็น จ)
