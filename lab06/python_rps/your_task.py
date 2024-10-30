def hello_world():
    return "Hello world!"


def rps(hand1, hand2):
    # finish this code:
    if hand1 == "rock" and hand2 == "paper":
        return "Paper wins!"
    elif hand1 == "paper" and hand2 == "rock":
        return "Paper wins!"
    elif hand1 == "rock" and hand2 == "scissors":
        return "Rock wins!"
    elif hand1 == "scissors" and hand2 == "rock":
        return "Rock wins!"
    elif hand1 == "paper" and hand2 == "scissors":
        return "Scissors wins!"
    elif hand1 == "scissors" and hand2 == "paper":
        return "Scissors wins!"
    elif hand1 == hand2:
        return "Tie!"
    else:
        return "Invalid"
