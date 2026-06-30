class Address {
    String city;

    Address(String city) {
        this.city = city;
    }
}

class Student {
    String name;
    Address address;

    Student(String name, Address address) {
        this.name = name;
        this.address = address;
    }
}

Address a1 = new Address("Delhi");

Student s1 = new Student("Ashmit", a1);

// Shallow copy
Student s2 = new Student(s1.name, s1.address);