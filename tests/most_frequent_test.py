import unittest
import sys
sys.path.append('/')

from most_frequent import mode

numbers = [1,2,3,4,5,6,6,8,8,6,9]
grades = [87.5, 88.5, 60.5, 90.5, 88.5]

class MostFrequentTest(unittest.TestCase):
    def test_output_false(self):
        self.assertFalse(mode('arr'))
    def test_numbers(self):
        self.assertEqual(mode(numbers), 6)
    def test_grades(self):
        self.assertNotEqual(mode(numbers), 87.5)

if __name__ == '__main__':
    unittest.main()
