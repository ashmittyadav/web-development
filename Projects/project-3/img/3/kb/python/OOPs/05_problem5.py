from random import randint
class Train:

    def __init__(self, trainNo):
        self.trainNo = trainNo
    def Book(self, fro, to):
        print(f"Ticket is booked in Train no: {self.trainNo} from {fro} to {to}")

    def getStatus(self):
        print(f"Train no : {self.trainNo} is running on time")

    def getFare(self, fro, to):
        print(f"Ticket fare of train no : {self.trainNo} from {fro} to {to} is {randint(111,999)}")

t= Train(567)
t.Book("Rampur", "Ramishpur")
t.getStatus()
t.getFare("Rampur", "Ramishpur")