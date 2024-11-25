import asyncio
import time

async def waiter()->None:
    task1 = asyncio.create_task(cook("pizza", 3))
    task2 = asyncio.create_task(cook("pasta", 2))
    task3 = asyncio.create_task(cook("salad", 1))
    
    await task1
    await task2
    await task3

async def cook(order, time):
    print(f"Start cooking {order}")
    await asyncio.sleep(time)
    print(f"Finish cooking {order}")

asyncio.run(waiter())

'''
➜  python tasks.py 
Start cooking pizza
Start cooking pasta
Start cooking salad
Finish cooking salad
Finish cooking pasta
Finish cooking pizza
'''