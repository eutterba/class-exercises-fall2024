"""
Run these tests from the CLI (from within the python_rps directory)
as follows:

    python3 run_tests_vanilla.py

"""

from helpers import assert_print, run_all_tests
from your_task import hello_world, rps


def test_hello_world():
    return assert_print(hello_world() == "Hello world!", 'It returns "Hello world!"')


def test_paper_beats_rock():
    return assert_print(
        rps("rock", "paper") == "Paper wins!",  # condition to check
        "Paper beats rock",  # output message
    )


def test_paper_beats_rock_flipped():
    return assert_print(
        rps("paper", "rock") == "Paper wins!",  # condition to check
        "Paper beats rock (flipped)",  # output message
    )


def test_rock_beats_scissors():
    return assert_print(rps("rock", "scissors") == "Rock wins!", "Rock beats scissors")


def test_rock_beats_scissors_flipped():
    return assert_print(
        rps("scissors", "rock") == "Rock wins!", "Rock beats scissors (flipped)"
    )


def test_scissors_beats_paper():
    return assert_print(
        rps("scissors", "paper") == "Scissors wins!", "Scissors beats paper"
    )


def test_scissors_beats_paper_flipped():
    return assert_print(
        rps("paper", "scissors") == "Scissors wins!", "Scissors beats paper (flipped)"
    )


def test_rock_tie():
    return assert_print(rps("rock", "rock") == "Tie!", "rock tie")


def test_paper_tie():
    return assert_print(rps("paper", "paper") == "Tie!", "paper tie")


def test_scissor_tie():
    return assert_print(rps("scissors", "scissors") == "Tie!", "scissor tie")


def test_hand1_misinput():
    return assert_print(rps("skissors", "rock") == "Invalid", "hand1 misinput")


def test_hand2_misinput():
    return assert_print(rps("rock", "skissors") == "Invalid", "hand2 misinput")


def test_mult_misinput():
    return assert_print(rps("pauper", "skizzors") == "Invalid", "multiple misinputs")


# don't forget to add any new tests to the list of tests to be run:
run_all_tests(
    [
        test_hello_world,
        test_paper_beats_rock,
        test_paper_beats_rock_flipped,
        test_rock_beats_scissors,
        test_rock_beats_scissors_flipped,
        test_scissors_beats_paper,
        test_rock_beats_scissors_flipped,
        test_rock_tie,
        test_paper_tie,
        test_scissor_tie,
        test_hand1_misinput,
        test_hand2_misinput,
        test_mult_misinput,
    ]
)
