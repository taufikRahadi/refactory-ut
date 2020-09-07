import unittest
import sys
sys.path.append('/')

from trim_words import trim_words

class TrimWordsTest(unittest.TestCase):
    def test_num_is_not_int(self):
        self.assertFalse(trim_words('ini adalah tulisan yang sangat panjang', 'num'))
    def test_val_is_not_str(self):
        self.assertFalse(trim_words('ini adalah tulisan yang sangat panjang'.split(' '), 4))
    def test_success(self):
        self.assertEqual(trim_words('ini adalah tulisan yang sangat panjang', 3), 'ini adalah tulisan')

if __name__ == '__main__':
    unittest.main()
