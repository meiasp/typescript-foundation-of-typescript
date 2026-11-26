function processData(data: unknown): string {
  if (typeof data === "string") {
      return data.toUpperCase();
  }
  return "Not a string";
}
console.log(processData("hello")); // "HELLO"
console.log(processData(123));     // "Not a string"

// Error ที่เจอคือ data กำหนดเป็น unknown แต่ไม่ได้มีการตรวจสอบ type data ก่อนนำมาใช้งานในฟังก์ชั่น