import unittest
import sys
sys.path.append('/')

from convert_num import Convert

class ConvertNumTest(unittest.TestCase):
    def test_bil_is_not_int(self):
        self.assertFalse(Convert('bil'))
    
    def test_more_than_1000(self):
        self.assertEqual(Convert(1001), 'Angka hanya sampai seribu')
    
    def test_dua_belas(self):
        self.assertEqual(Convert(12), 'Dua Belas')

if __name__ == '__main__':
    unittest.main()
