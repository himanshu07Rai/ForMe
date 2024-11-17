import threading
import time

done = False

def worker():
    counter = 0
    while not done:
        time.sleep(1)
        counter+=1
        print(counter)

# worker()

#done = True # this will never be reached without using threading because the worker function will run forever and the done variable will never be set to True

threading.Thread(target=worker, daemon=True).start() # this will run the worker function in a separate thread and the done variable can be set to True
# daemon=True will make the thread a daemon thread, which means that the thread will 
# stop when the main program stops. If daemon=False, the thread will continue to run even after the main program stops.

input("Press Enter to stop the worker: ") # this will stop the worker function by setting the done variable to True
done = True



