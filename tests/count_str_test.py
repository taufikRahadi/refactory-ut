import unittest
import sys
sys.path.append('/')
from count_str import count_str

class CountStrTest(unittest.TestCase):
    def test_saya(self):
        self.assertEqual(count_str('saya'), 4)

    def test_lari_pagi(self):
        self.assertNotEqual(count_str('lari pagi'), 11)
    
    def test_int(self):
        self.assertEqual(count_str(1), 'input string pls')

if __name__ == '__main__':
    unittest.main()
