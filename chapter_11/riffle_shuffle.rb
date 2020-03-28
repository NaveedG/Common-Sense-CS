# Write a method that takes two linked lists and puts them together with a riffle shuffle. 
# That is, if you riffle shuffle the following lists: [1, 3, 5, 7] and [2, 4, 6, 8], the resulting list should be [1, 2, 3, 4, 5, 6, 7, 8].

class Node

  attr_accessor :data, :next_node

  def initialize(data)
    @data = data
  end

end

class LinkedList

  attr_accessor :first_node

  def initialize(first_node = nil)
    @first_node = first_node
  end

  def collect_data
    new_arr = []
    current_node = @first_node

    while current_node do
      new_arr.push(current_node.data)
      current_node = current_node.next_node
    end

    new_arr
  end

  def riffle_shuffle(second_list)
    arr = self.collect_data.concat(second_list.collect_data).sort
    new_list = LinkedList.new(Node.new(arr[0]))
    current_node = new_list.first_node

    arr[1..-1].each do |x|
      current_node.next_node = Node.new(x)
      current_node = current_node.next_node
    end

    new_list
  end

end

one = Node.new(1)
three = Node.new(3)
five = Node.new(5)
seven = Node.new(7)
one.next_node = three
three.next_node = five
five.next_node = seven
list_1 = LinkedList.new(one)
p list_1.collect_data # [1, 3, 5, 7]

two = Node.new(2)
four = Node.new(4)
six = Node.new(6)
eight = Node.new(8)
two.next_node = four
four.next_node = six
six.next_node = eight
list_2 = LinkedList.new(two)
p list_2.collect_data # [2, 4, 6, 8]

p list_1.riffle_shuffle(list_2).collect_data # [1, 2, 3, 4, 5, 6, 7, 8]