import asyncio
import time

async def waiter()->None:
    await cook("pizza", 3)
    await cook("pasta", 2)
    await cook("salad", 1)

async def cook(order, time):
    print(f"Start cooking {order}")
    await asyncio.sleep(time)
    print(f"Finish cooking {order}")

asyncio.run(waiter())

'''
➜  python coros.py
Start cooking pizza
Finish cooking pizza
Start cooking pasta
Finish cooking pasta
Start cooking salad
Finish cooking salad
'''