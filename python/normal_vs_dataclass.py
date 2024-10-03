# class Fruit:
#     def __init__(self, name: str, color: str):
#         self.name = name
#         self.color = color
    
#     def __repr__(self):
#         return f"{self.name} ({self.color})"
    
#     def game(self):
#         print("This is a fruit")

# f = Fruit("Apple", "Red")

# f.game()
from dataclasses import dataclass

@dataclass
class Fruit:
    name: str
    color: str
    def __str__(self) -> str:
        return f"{self.name} is ({self.color})"

f = Fruit('Apple', 'Red')

print(f)
