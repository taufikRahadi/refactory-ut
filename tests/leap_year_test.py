import unittest
import sys
sys.path.append('/')

from leap_year import check_leap

class LeapYearTest(unittest.TestCase):
    def test_2000(self):
        self.assertEqual(check_leap(2000), 'Kabisat')
    
    def test_1899(self):
        self.assertEqual(check_leap(1899), 'Bukan Kabisat')
    
    def test_str(self):
        self.assertFalse(check_leap('Tahun'))

if __name__ == '__main__':
    unittest.main()
