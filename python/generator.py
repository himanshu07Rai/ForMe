def numbers():
    for i in range(10):
        yield i

a = numbers()  # <generator object random_randoms at 0x7f7f3c0b3d60>
print(next(a))  # 0
print(next(a))  # 1
print(next(a))  # 2
print(next(a))  # 3