import unittest
import sys
sys.path.append('/')

from film_rating import check_rating

class FilmRatingTest(unittest.TestCase):
    def test_15(self):
        self.assertEqual(check_rating(15), "REMAJA")

    def test_32(self):
        self.assertEqual(check_rating(32), "DEWASA")
    
    def test_str(self):
        self.assertFalse(check_rating('uwuw'))

if __name__ == '__main__':
    unittest.main()
