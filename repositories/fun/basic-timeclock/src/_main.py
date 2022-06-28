import tkinter as tk
import time
from time import time as timeclock

class App():
    def __init__(self):
        self.root = tk.Tk()
        w, h = self.root.winfo_screenwidth(), self.root.winfo_screenheight()
        self.root.geometry("%dx%d+0+0" % (w, h))
        self.time = tk.Label(text="TIME", font=('Courier', 72))
        self.time.pack(side="top", pady=40)
        self.name = tk.Text(self.root, height = 1, width = 20)
        self.name.pack()
        self.clock_button = tk.Button(self.root, text="Clock In", command=self.clock_in)
        self.clock_button.pack(pady=20)
        self.update_clock()
        self.root.mainloop()

    def update_clock(self):
        now = time.strftime("%H:%M:%S")
        self.time.configure(text=now)
        self.root.after(500, self.update_clock)

    def clock_in(self):
        self.clock_button.configure(text="Clock Out", command=self.clock_out)
        self.start = timeclock()
        self.startTime = time.strftime('%H:%M:%S')
    def clock_out(self):
        self.clock_button.configure(text="Clock In", command=self.clock_in)
        end = timeclock()
        self.endTime = time.strftime('%H:%M:%S')
        self.hours = round((end - self.start) / 3600, 2)
        date = time.strftime('%d-%m-%Y')
        timesheet = open(f"{date}.csv", "a")
        user_name = self.name.get('1.0',tk.END).replace("\n", "").upper()
        timesheet.write(f"{user_name}, {self.startTime}, {self.endTime}, {self.hours} \n")
        timesheet.close()

app=App()