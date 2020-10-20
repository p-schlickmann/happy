from django.test import TestCase
from .models import State, City, Orphanage


class ModelsTestCase(TestCase):
    """Responsible for testing model data"""

    def setUp(self):
        """Django runs this first"""

        # Create Testable States
        s1 = State.objects.create(name='Rio de Janeiro', short='RJ')
        s2 = State.objects.create(name='Parana', short='PRN')

        # Create Testable Cities
        c1 =City.objects.create(state=s1, name='Osasco')
        c2 = City.objects.create(state=s1, name='R', short='RJ')

        # Create Testable Orphanages

    def test_valid_state(self):
        s1 = State.objects.get(short="RJ")
        s2 = State.objects.get(name="Parana")
        self.assertTrue(s1.is_valid_state())
        self.assertTrue(s2.is_valid_state())

    def test_valid_city(self):
        c1 = City.objects.get(name="Osasco")
        c2 = City.objects.get(short="RJ")
        self.assertTrue(c1.is_valid_city())
        self.assertTrue(c2.is_valid_city())
