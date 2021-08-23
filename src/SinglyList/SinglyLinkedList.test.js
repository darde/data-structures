const { SinglyLinkedList } = require("./SinglyLinkedList");

describe("SinglyLinkedList", () => {
  let singlyList;
  beforeEach(() => {
    singlyList = new SinglyLinkedList();
  });
  test("returns linked list size when calling size method", () => {
    const size = singlyList.size();

    expect(size).toBe(0);
  });

  describe("when adding a new item on an emtpy list", () => {
    let singlyList;
    beforeEach(() => {
      singlyList = new SinglyLinkedList();
    });
    test("add an item to the tail", () => {
      singlyList.add("Joe");

      expect(singlyList.size()).toBe(1);
      expect(singlyList.head).toEqual(
        expect.objectContaining({
          data: "Joe",
          next: null
        })
      );
      expect(singlyList.tail).toEqual(
        expect.objectContaining({
          data: "Joe",
          next: null
        })
      );
    });

    test("add an item to the head", () => {
      singlyList.addFirst("Jack");

      expect(singlyList.size()).toBe(1);
      expect(singlyList.head).toEqual(
        expect.objectContaining({
          data: "Jack",
          next: null
        })
      );
      expect(singlyList.tail).toEqual(
        expect.objectContaining({
          data: "Jack",
          next: null
        })
      );
    });
  });

  describe("when adding a new item on a non-empty list", () => {
    let singlyList;
    beforeEach(() => {
      singlyList = new SinglyLinkedList();
    });

    test("add an item to the tail", () => {
      singlyList.add("Joe");
      singlyList.add("Paul");

      expect(singlyList.size()).toBe(2);
      expect(singlyList.head).toEqual(
        expect.objectContaining({
          data: "Joe",
          next: { data: "Paul", next: null }
        })
      );
      expect(singlyList.tail).toEqual(
        expect.objectContaining({
          data: "Paul",
          next: null
        })
      );
    });

    test("add an item to the head", () => {
      singlyList.add("Joe");
      singlyList.add("Paul");
      singlyList.addFirst("Monica");

      expect(singlyList.size()).toBe(3);
      expect(singlyList.head).toEqual(
        expect.objectContaining({
          data: "Monica",
          next: { data: "Joe", next: { data: "Paul", next: null } }
        })
      );
      expect(singlyList.tail).toEqual(
        expect.objectContaining({
          data: "Paul",
          next: null
        })
      );
    });
  });

  describe("searching elements", () => {
    let singlyList;
    beforeEach(() => {
      singlyList = new SinglyLinkedList();
    });

    test("peeking up the first element on a non-empty list", () => {
      singlyList.add("Joe");
      singlyList.add("Paul");
      const firstElement = singlyList.peekFirst();

      expect(firstElement).toEqual("Joe");
    });

    test("peeking up the first element on an empty list", () => {
      // According jest, to catch the error, you need to wrap in a function
      const firstElement = () => {
        singlyList.peekFirst();
      };

      expect(firstElement).toThrow("The list is empty!");
    });

    test("peeking the last element on a non-empty list", () => {
      singlyList.add("Joe");
      singlyList.add("Paul");
      const lastElement = singlyList.peekLast();

      expect(lastElement).toEqual("Paul");
    });

    test("peeking up the last element on an empty list", () => {
      // According jest, to catch the error, you need to wrap in a function
      const lastElement = () => {
        singlyList.peekLast();
      };

      expect(lastElement).toThrow("The list is empty!");
    });
  });

  describe("removing elements", () => {
    let singlyList;
    beforeEach(() => {
      singlyList = new SinglyLinkedList();
    });

    test("removing the first element on a non-empty list", () => {
      singlyList.add("Joe");
      singlyList.add("Paul");

      singlyList.removeFirst();

      expect(singlyList.size()).toBe(1);
      expect(singlyList.head).toEqual(
        expect.objectContaining({
          data: "Paul",
          next: null
        })
      );
      expect(singlyList.tail).toEqual(
        expect.objectContaining({
          data: "Paul",
          next: null
        })
      );
    });

    test("remove the first element on a list with only one element", () => {
      singlyList.add("Maria");
      singlyList.removeFirst();

      expect(singlyList.size()).toBe(0);
      expect(singlyList.head).toBe(null);
      expect(singlyList.tail).toBe(null);
    });

    test("removing the last element on a non-empty list", () => {
      singlyList.add("Maria");
      singlyList.add("Joe");
      singlyList.add("Paul");

      singlyList.removeLast();
      expect(singlyList.size()).toBe(2);
      expect(singlyList.head).toEqual(
        expect.objectContaining({
          data: "Maria",
          next: { data: "Joe", next: null }
        })
      );
      expect(singlyList.tail).toEqual(
        expect.objectContaining({
          data: "Joe",
          next: null
        })
      );
    });

    test("removing the first element on an empty list", () => {
      const removedElement = () => {
        singlyList.removeFirst();
      };

      expect(removedElement).toThrow("The list is empty!");
    });

    test("removing the last element on an empty list", () => {
      const removed = () => {
        singlyList.removeLast();
      };

      expect(singlyList.size()).toBe(0);
      expect(removed).toThrow("The list is empty!");
    });

    test("removing the last element on list with only one elment", () => {
      singlyList.add("Jack");
      singlyList.removeLast();

      expect(singlyList.size()).toBe(0);
      expect(singlyList.tail).toBe(null);
    });
  });
});
