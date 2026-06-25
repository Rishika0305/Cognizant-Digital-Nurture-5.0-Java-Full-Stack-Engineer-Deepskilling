public class TestFactory {

    public static void main(String[] args) {

        Document d1 = DocumentFactory.getDocument("word");
        Document d2 = DocumentFactory.getDocument("pdf");
        Document d3 = DocumentFactory.getDocument("excel");

        d1.open();
        d2.open();
        d3.open();
    }
}