# Program Pythona do ilustracji
# *args dla zmiennej liczby argumentów
def mojaFunkcja(*argv):
    for arg in argv:
        print(arg)

mojaFunkcja('Witaj', 'na', 'kursie', 'Pythona')
