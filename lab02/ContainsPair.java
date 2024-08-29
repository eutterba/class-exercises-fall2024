import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class ContainsPair {
    public static boolean containsPair(List<Integer> l) {
        Set<Integer> s = new HashSet<Integer>(l);
        return s.size() != l.size();
    }

    public static void main(String[] args) {
        // List<Integer> tester = { 1, 8, 5, 7, 6, 4, 2, 9, 1 };
        // System.out.println(tester);
    }
}
